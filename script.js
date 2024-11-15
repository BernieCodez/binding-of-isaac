document.getElementById('search').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const sections = document.querySelectorAll('#wiki section');
    let hasResults = false;
  
    sections.forEach(section => {
        const dataBlocks = section.querySelectorAll('#data');
        let sectionHasResults = false;
  
        dataBlocks.forEach(dataBlock => {
            const title = dataBlock.querySelector('h3').textContent.toLowerCase();
            const content = dataBlock.textContent.toLowerCase();
  
            if (title.includes(searchValue) || content.includes(searchValue)) {
                dataBlock.style.display = 'block';
                sectionHasResults = true;
            } else {
                dataBlock.style.display = 'none';
            }
        });
  
        if (sectionHasResults) {
            section.style.display = 'block';
            hasResults = true;
        } else {
            section.style.display = 'none';
        }
    });
  
    // Display "No results found" message if no sections have matching results
    const noResultsMessage = document.getElementById('no-results');
    if (!hasResults) {
        if (!noResultsMessage) {
            const message = document.createElement('p');
            message.id = 'no-results';
            message.textContent = 'No results found.';
            document.getElementById('content').appendChild(message);
        }
    } else if (noResultsMessage) {
        noResultsMessage.remove();
    }
  });
  