import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Box } from '@chakra-ui/layout';
import Card from './components/Card';
import { data } from './data';
import './App.scss';

function App() {
  const onDragEnd = () => {
    console.log('---DRAG ENDED---');
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <Box className="leftSide">
          {React.Children.toArray(
            data.map((item, i) => (
              <Droppable droppableId={`main-container-${i}`}>
                {(dropProvided, snapshot) => (
                  <Box
                    className="cardBox"
                    {...dropProvided.droppableProps}
                    ref={dropProvided.innerRef}
                  >
                    {dropProvided.placeholder}
                  </Box>
                )}
              </Droppable>
            ))
          )}
        </Box>
        <div className="rightSide">
          <section className="main">
            {React.Children.toArray(
              data.map((item, i) => (
                <Droppable droppableId={`main-container-${i}`}>
                  {(dropProvided, snapshot) => (
                    <Box
                      className="cardBox"
                      {...dropProvided.droppableProps}
                      ref={dropProvided.innerRef}
                    >
                      <Box p="2">
                        <Box
                          mt="1"
                          fontWeight="semibold"
                          as="h4"
                          lineHeight="tight"
                          isTruncated
                        >
                          {i + 1}
                        </Box>
                      </Box>
                      {
                        <Draggable draggableId={`card-${i}`} index={i}>
                          {(dragProvided, snapshot) => (
                            <Card
                              {...item}
                              innerRef={dragProvided.innerRef}
                              provided={dragProvided}
                            />
                          )}
                        </Draggable>
                      }
                      {dropProvided.placeholder}
                    </Box>
                  )}
                </Droppable>
              ))
            )}
          </section>
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
