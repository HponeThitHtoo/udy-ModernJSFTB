const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Double Click
// clearBtn.addEventListener('dblclick', runEvent);
// Mouse Down
// clearBtn.addEventListener('mousedown', runEvent);
// Mouse Up
// clearBtn.addEventListener('mouseup', runEvent);
// Mouse Enter
// card.addEventListener('mouseenter', runEvent);
// Mouse Leave
// card.addEventListener('mouseleave', runEvent);
// Mouse Over
// card.addEventListener('mouseover', runEvent); // effect also on child element
// Mouse Out
// card.addEventListener('mouseout', runEvent); // effect also on child element
// Mouse Move
card.addEventListener('mousemove', runEvent);


// Event Handler
function runEvent(e) {
    console.log(`Event Type: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}