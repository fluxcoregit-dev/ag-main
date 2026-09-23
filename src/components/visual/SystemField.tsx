'use client';

import { motion, useReducedMotion } from 'framer-motion';

const nodes = [
  { id: 'product', label: 'Product', x: 118, y: 286 },
  { id: 'intelligence', label: 'Intelligence', x: 246, y: 132 },
  { id: 'brand', label: 'Brand', x: 430, y: 168 },
  { id: 'growth', label: 'Growth', x: 512, y: 312 },
  { id: 'trust', label: 'Trust', x: 300, y: 360 },
];

const hub = { x: 318, y: 246 };

const links = nodes.map((node) => `M${hub.x} ${hub.y} L${node.x} ${node.y}`);

export function SystemField() {
  const reduce = useReducedMotion();

  return (
    <figure className="instrument">
      <img
        src="/visuals/coordination-field.png"
        alt=""
        className="instrument-photo"
      />
      <div className="instrument-shade" />
      <svg className="instrument-svg" viewBox="0 0 640 460" role="img" aria-label="A map of five practices connected through one standard">
        <defs>
          <linearGradient id="field-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d7e4ff" />
            <stop offset="100%" stopColor="#7eb6ff" />
          </linearGradient>
        </defs>
        {links.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="url(#field-line)"
            strokeWidth="1.25"
            initial={{ pathLength: reduce ? 1 : 0, opacity: reduce ? 0.8 : 0 }}
            animate={{ pathLength: 1, opacity: 0.9 }}
            transition={{ duration: reduce ? 0 : 1.15, delay: reduce ? 0 : 0.25 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
        <motion.circle
          cx={hub.x}
          cy={hub.y}
          r="5"
          fill="#f4f7ff"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: reduce ? 0 : 0.4, delay: 0.2 }}
        />
        {!reduce && (
          <motion.circle
            r="3.5"
            fill="#ffffff"
            initial={{ offsetDistance: '0%' }}
            animate={{ offsetDistance: '100%' }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
            style={{ offsetPath: `path('${links[1]}')` }}
          />
        )}
        {nodes.map((node, index) => (
          <motion.g
            key={node.id}
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: reduce ? 0 : 0.45 + index * 0.08 }}
          >
            <circle cx={node.x} cy={node.y} r="4" fill="#9ec4ff" />
            <circle cx={node.x} cy={node.y} r="10" fill="none" stroke="rgba(255,255,255,0.45)" />
            <text x={node.x + 16} y={node.y + 4} fill="#f5f7fb" fontSize="13" fontFamily="var(--font-outfit), sans-serif">
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
      <figcaption className="instrument-caption">
        <span>Coordination field</span>
        <span>Five practices, one standard</span>
      </figcaption>
    </figure>
  );
}
