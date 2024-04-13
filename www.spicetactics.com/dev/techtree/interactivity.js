const onElementClick = (event, element) => {
    console.log('Clicked', element);
  };
  
  return (
    <ReactFlow elements={elements} onElementClick={onElementClick} fitView>
      {/* MiniMap, Controls, Background as before */}
    </ReactFlow>
  );
  