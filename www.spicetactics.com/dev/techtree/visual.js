import React, { useEffect, useState } from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';

const nodeStyle = { border: '1px solid #777', padding: 10 };

const TechTree = ({ technologies }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const nodes = technologies.map(tech => ({
      id: tech.id,
      data: { label: `${tech.name}: ${tech.description}` },
      position: tech.position,
      style: nodeStyle,
    }));

    const edges = technologies
      .filter(tech => tech.parentIds)
      .flatMap(tech =>
        tech.parentIds.map(parentId => ({
          id: `e${parentId}-${tech.id}`,
          source: parentId,
          target: tech.id,
        }))
      );

    setElements([...nodes, ...edges]);
  }, [technologies]);

  return (
    <ReactFlow elements={elements} fitView>
      <MiniMap />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};
