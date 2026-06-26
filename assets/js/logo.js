const dots = d3.selectAll('.dot');
const connections = d3.select('.connections');
const bounds = {
  minX: 10.6,
  maxX: 90.5,
  minY: 13.4,
  maxY: 89.3
};
const CONNECTION_THRESHOLD = 30; // Maximum distance for showing connections

// Initialize random velocities for each dot
const dotStates = [];
dots.each(function() {
  dotStates.push({
    x: parseFloat(d3.select(this).attr('cx')),
    y: parseFloat(d3.select(this).attr('cy')),
    vx: (Math.random() - 0.5) * 0.2,
    vy: (Math.random() - 0.5) * 0.2
  });
});

// Function to calculate distance between two points
function distance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

// Function to update connection lines
function updateConnections() {
  // Remove existing lines
  connections.selectAll('line').remove();

  // For each dot, connect to nearby dots
  dotStates.forEach((dot1, i) => {
    dotStates.forEach((dot2, j) => {
      if (i < j) { // Only process each pair once
        const dist = distance(dot1, dot2);
        if (dist <= CONNECTION_THRESHOLD) {
          // Calculate opacity based on distance
          const opacity = 1 - (dist / CONNECTION_THRESHOLD);

          connections.append('line')
            .attr('class', 'connection')
            .attr('x1', dot1.x)
            .attr('y1', dot1.y)
            .attr('x2', dot2.x)
            .attr('y2', dot2.y)
            .style('stroke-opacity', opacity * 2);
        }
      }
    });
  });
}

// Create timer for continuous animation
d3.timer((elapsed) => {
  dots.each(function(d, i) {
    const dot = d3.select(this);
    const state = dotStates[i];

    // Update position based on velocity
    state.x += state.vx;
    state.y += state.vy;

    // Bounce off boundaries
    if (state.x < bounds.minX || state.x > bounds.maxX) {
      state.vx *= -1;
      state.x = Math.max(bounds.minX, Math.min(bounds.maxX, state.x));
    }
    if (state.y < bounds.minY || state.y > bounds.maxY) {
      state.vy *= -1;
      state.y = Math.max(bounds.minY, Math.min(bounds.maxY, state.y));
    }

    // Randomly adjust velocity occasionally
    if (Math.random() < 0.02) {
      state.vx += (Math.random() - 0.5) * 0.1;
      state.vy += (Math.random() - 0.5) * 0.1;

      // Limit maximum velocity
      const maxVelocity = 0.3;
      const velocity = Math.sqrt(state.vx * state.vx + state.vy * state.vy);
      if (velocity > maxVelocity) {
        state.vx = (state.vx / velocity) * maxVelocity;
        state.vy = (state.vy / velocity) * maxVelocity;
      }
    }

    // Update dot position
    dot.attr('cx', state.x)
        .attr('cy', state.y);
  });

  // Update connection lines
  updateConnections();
});