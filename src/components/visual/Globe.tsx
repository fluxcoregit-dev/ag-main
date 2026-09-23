'use client';

import { useEffect, useRef } from 'react';
import { practices } from '@/lib/site';

type Vec = { x: number; y: number; z: number };

const NODES = [
  { id: 'product', lat: 22, lon: -42 },
  { id: 'ai', lat: 46, lon: 18 },
  { id: 'brand', lat: 8, lon: 78 },
  { id: 'growth', lat: -18, lon: 138 },
  { id: 'trust', lat: -32, lon: -122 },
] as const;

function latLon(lat: number, lon: number): Vec {
  const phi = (lat * Math.PI) / 180;
  const theta = (lon * Math.PI) / 180;
  return {
    x: Math.cos(phi) * Math.sin(theta),
    y: Math.sin(phi),
    z: Math.cos(phi) * Math.cos(theta),
  };
}

function rotY(v: Vec, a: number): Vec {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return { x: v.x * c - v.z * s, y: v.y, z: v.x * s + v.z * c };
}

function rotX(v: Vec, a: number): Vec {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return { x: v.x, y: v.y * c - v.z * s, z: v.y * s + v.z * c };
}

function slerp(a: Vec, b: Vec, t: number): Vec {
  let dot = a.x * b.x + a.y * b.y + a.z * b.z;
  dot = Math.max(-1, Math.min(1, dot));
  const omega = Math.acos(dot);
  if (omega < 0.001) return a;
  const so = Math.sin(omega);
  const s1 = Math.sin((1 - t) * omega) / so;
  const s2 = Math.sin(t * omega) / so;
  return {
    x: a.x * s1 + b.x * s2,
    y: a.y * s1 + b.y * s2,
    z: a.z * s1 + b.z * s2,
  };
}

const DOTS: Vec[] = (() => {
  const count = 780;
  const golden = Math.PI * (3 - Math.sqrt(5));
  const dots: Vec[] = [];
  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = golden * i;
    dots.push({ x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius });
  }
  return dots;
})();

const NODE_VECS = NODES.map((node) => ({
  ...node,
  vec: latLon(node.lat, node.lon),
  practice: practices.find((item) => item.id === node.id),
}));

const ARCS: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 0],
  [0, 2],
];

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const state = {
      ry: 0.6,
      rx: -0.35,
      dragging: false,
      lastX: 0,
      lastY: 0,
      pointerX: 0,
      pointerY: 0,
      hovering: false,
      active: '',
    };
    const hits: Array<{ id: string; x: number; y: number }> = [];
    let frame = 0;
    let raf = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const showCard = (id: string, x: number, y: number) => {
      const card = cardRef.current;
      const node = NODE_VECS.find((item) => item.id === id);
      if (!card || !node?.practice) return;
      if (state.active !== id) {
        state.active = id;
        if (titleRef.current) titleRef.current.textContent = node.practice.title;
        if (bodyRef.current) bodyRef.current.textContent = node.practice.outcome;
      }
      card.hidden = false;
      card.style.transform = `translate(${x + 16}px, ${y - 12}px)`;
    };

    const hideCard = () => {
      state.active = '';
      if (cardRef.current) cardRef.current.hidden = true;
    };

    const onDown = (event: PointerEvent) => {
      state.dragging = true;
      state.lastX = event.clientX;
      state.lastY = event.clientY;
      canvas.setPointerCapture(event.pointerId);
    };
    const onUp = () => {
      state.dragging = false;
    };
    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      state.pointerX = event.clientX - rect.left;
      state.pointerY = event.clientY - rect.top;
      state.hovering = true;
      if (state.dragging) {
        state.ry += (event.clientX - state.lastX) * 0.006;
        state.rx += (event.clientY - state.lastY) * 0.004;
        state.rx = Math.max(-1.1, Math.min(1.1, state.rx));
        state.lastX = event.clientX;
        state.lastY = event.clientY;
      }
    };
    const onLeave = () => {
      state.hovering = false;
      state.dragging = false;
      hideCard();
    };

    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointerup', onUp);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerleave', onLeave);

    const draw = (time: number) => {
      const width = canvas.width;
      const height = canvas.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      context.clearRect(0, 0, width, height);
      const cx = width * 0.5;
      const cy = height * 0.48;
      const radius = Math.min(width, height) * 0.36;

      if (!state.dragging && !reduce) state.ry += 0.004;

      const tilt = state.hovering && !state.dragging ? (state.pointerY / (height / dpr) - 0.5) * 0.18 : 0;
      const turn = (vector: Vec) => rotX(rotY(vector, state.ry), state.rx + tilt);
      const project = (vector: Vec) => {
        const spun = turn(vector);
        const depth = 2.6 / (2.6 - spun.z);
        return {
          x: cx + spun.x * radius * depth,
          y: cy - spun.y * radius * depth,
          z: spun.z,
        };
      };

      const halo = context.createRadialGradient(cx, cy, radius * 0.2, cx, cy, radius * 1.55);
      halo.addColorStop(0, 'rgba(90, 150, 255, 0.28)');
      halo.addColorStop(0.45, 'rgba(40, 90, 220, 0.12)');
      halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
      context.fillStyle = halo;
      context.beginPath();
      context.arc(cx, cy, radius * 1.55, 0, Math.PI * 2);
      context.fill();

      const body = context.createRadialGradient(cx - radius * 0.25, cy - radius * 0.3, radius * 0.1, cx, cy, radius);
      body.addColorStop(0, 'rgba(36, 78, 150, 0.95)');
      body.addColorStop(0.55, 'rgba(10, 24, 58, 0.92)');
      body.addColorStop(1, 'rgba(4, 8, 20, 0.2)');
      context.fillStyle = body;
      context.beginPath();
      context.arc(cx, cy, radius * 0.98, 0, Math.PI * 2);
      context.fill();

      context.strokeStyle = 'rgba(150, 190, 255, 0.16)';
      context.lineWidth = 1 * dpr;
      for (let lat = -60; lat <= 60; lat += 30) {
        context.beginPath();
        let started = false;
        for (let lon = -180; lon <= 180; lon += 8) {
          const point = project(latLon(lat, lon));
          if (point.z < -0.05) {
            started = false;
            continue;
          }
          if (!started) {
            context.moveTo(point.x, point.y);
            started = true;
          } else {
            context.lineTo(point.x, point.y);
          }
        }
        context.stroke();
      }

      const painted = DOTS.map((dot) => project(dot)).sort((a, b) => a.z - b.z);
      painted.forEach((dot) => {
        const front = dot.z > 0;
        context.fillStyle = front ? `rgba(210, 230, 255, ${0.25 + dot.z * 0.7})` : 'rgba(120, 160, 220, 0.14)';
        context.beginPath();
        context.arc(dot.x, dot.y, (front ? 1.35 : 0.8) * dpr, 0, Math.PI * 2);
        context.fill();
      });

      hits.length = 0;
      ARCS.forEach(([from, to], index) => {
        const start = NODE_VECS[from].vec;
        const end = NODE_VECS[to].vec;
        context.beginPath();
        let drawing = false;
        for (let step = 0; step <= 32; step += 1) {
          const t = step / 32;
          const lifted = slerp(start, end, t);
          const lift = 1 + Math.sin(Math.PI * t) * 0.22;
          const point = project({ x: lifted.x * lift, y: lifted.y * lift, z: lifted.z * lift });
          if (point.z < 0) {
            drawing = false;
            continue;
          }
          if (!drawing) {
            context.moveTo(point.x, point.y);
            drawing = true;
          } else {
            context.lineTo(point.x, point.y);
          }
        }
        context.strokeStyle = 'rgba(150, 205, 255, 0.55)';
        context.lineWidth = 1.25 * dpr;
        context.stroke();

        if (!reduce) {
          const headT = (time / 2800 + index * 0.17) % 1;
          const head = slerp(start, end, headT);
          const lift = 1 + Math.sin(Math.PI * headT) * 0.22;
          const point = project({ x: head.x * lift, y: head.y * lift, z: head.z * lift });
          if (point.z > 0) {
            context.fillStyle = '#ffffff';
            context.shadowColor = '#8eb6ff';
            context.shadowBlur = 12 * dpr;
            context.beginPath();
            context.arc(point.x, point.y, 2.4 * dpr, 0, Math.PI * 2);
            context.fill();
            context.shadowBlur = 0;
          }
        }
      });

      NODE_VECS.forEach((node) => {
        const point = project(node.vec);
        if (point.z < 0.05) return;
        const screenX = point.x / dpr;
        const screenY = point.y / dpr;
        hits.push({ id: node.id, x: screenX, y: screenY });
        const near = Math.hypot(screenX - state.pointerX, screenY - state.pointerY) < 28;
        context.fillStyle = near ? '#ffffff' : '#b7d4ff';
        context.shadowColor = '#7eb0ff';
        context.shadowBlur = near ? 18 * dpr : 8 * dpr;
        context.beginPath();
        context.arc(point.x, point.y, (near ? 5 : 3.2) * dpr, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
        context.strokeStyle = 'rgba(255,255,255,0.45)';
        context.lineWidth = 1 * dpr;
        context.beginPath();
        context.arc(point.x, point.y, 9 * dpr, 0, Math.PI * 2);
        context.stroke();
      });

      if (!state.dragging && state.hovering) {
        const hit = hits.find((item) => Math.hypot(item.x - state.pointerX, item.y - state.pointerY) < 28);
        if (hit) showCard(hit.id, hit.x, hit.y);
        else hideCard();
      } else if (!state.hovering) {
        hideCard();
      }

      frame = requestAnimationFrame(draw);
      void time;
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointerup', onUp);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div className="globe-stage">
      <canvas ref={canvasRef} className="globe-canvas" aria-label="Interactive globe. Drag to rotate. Hover a point to read the practice." />
      <div ref={cardRef} className="globe-card" hidden>
        <p ref={titleRef} className="globe-card-title" />
        <p ref={bodyRef} className="globe-card-body" />
      </div>
      <p className="globe-hint">Drag to turn the globe. Hover a point.</p>
    </div>
  );
}
