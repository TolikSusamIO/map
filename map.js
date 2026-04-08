const tooltip = document.getElementById('tooltip');
const places = document.querySelectorAll(".place")

places.forEach((place) => {
    if(place.dataset.status == "Занят"){
        place.classList.add("occupied")
    }
    if(place.dataset.status == "Резерв"){
        place.classList.add("reserve")
    }
})

document.addEventListener('mouseover', (e) => {
  const target = e.target.closest('.has-tooltip');
  if (!target) return;

  let name = target.dataset.tooltip;
  let status= target.dataset.status;
  let owner = target.dataset.owner;
let html = `
    <div class="tooltip_title">${name}</div>
    <div class="tooltip_row">${status}</div>
  `;

  if (status === "Занят" && owner) {
    html += `<div class="tooltip_row">${owner}</div>`;
  }

  tooltip.innerHTML = html;
  tooltip.style.opacity = 1;
});

document.addEventListener('mousemove', (e) => {
  tooltip.style.left = (e.pageX + 10) + 'px';
  tooltip.style.top = (e.pageY + 10) + 'px';
});

document.addEventListener('mouseout', (e) => {
  if (e.target.closest('.has-tooltip')) {
    tooltip.style.opacity = 0;
  }
});