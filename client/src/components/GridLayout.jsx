import React from 'react';
import { Grid } from '@mui/material';

const GridLayout = () => {
  const columns = 6;
  const firstRowHeight = 112;
  const otherRowsHeight = 72;
  const boxWidth = 141.67;

  return (
    <div className="w-full">
      {/* First Row */}
      <Grid container>
      
        {[...Array(columns)].map((_, idx) => (
          <Grid item key={`row1-col${idx}`} xs>
            <div
              style={{ width: `${boxWidth}px`, height: `${firstRowHeight}px` }}
              className="border bg-white"
            />
          </Grid>
        ))}
      </Grid>

      {/* Other Rows (3 rows) */}
      {[...Array(3)].map((_, rowIndex) => (
        <Grid container key={`row-${rowIndex + 2}`}>
          {[...Array(columns)].map((_, colIndex) => (
            <Grid item key={`row${rowIndex + 2}-col${colIndex}`} xs>
              <div
                style={{ width: `${boxWidth}px`, height: `${otherRowsHeight}px` }}
                className="border bg-white"
              />
            </Grid>
          ))}
        </Grid>
      ))}
    </div>
  );
};

export default GridLayout;