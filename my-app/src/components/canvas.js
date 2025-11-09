import { ReactFlow, Controls, Background, useNodesState, useEdgesState, addEdge, useReactFlow } from '@xyflow/react';
import { useState, useCallback } from 'react';
import '@xyflow/react/dist/style.css';

const Canvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [url, setUrl] = useState('');
  const reactFlowInstance = useReactFlow();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleAddNode = () => {
    if (!url) return;
    
    const position = {
      x: Math.random() * 500,
      y: Math.random() * 300,
    };

    const newNode = {
      id: `node-${nodes.length + 1}`,
      type: 'default',
      position,
      data: { 
        label: (
          <div style={{ padding: '10px' }}>
            <div style={{ fontSize: '12px', marginBottom: '5px' }}>{url}</div>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Visit Site
            </a>
          </div>
        ),
      },
    };

    setNodes((nds) => [...nds, newNode]);
    setUrl('');
  };

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <div style={{ padding: '10px', background: '#f8f8f8' }}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL"
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button onClick={handleAddNode}>Add Website</button>
      </div>
      <div style={{ height: 'calc(100% - 60px)' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Controls />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Canvas;