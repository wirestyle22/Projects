atreides_techtree.html  script.js  style.css  talentbg.jpg
[root@spicetactics dev]# cat script.js
document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    function showTooltip(event) {
        const text = event.target.getAttribute('data-tooltip');
        if (text) {
            tooltip.innerHTML = text.replace(/\|/g, '<br>');
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.pageX + 15}px`;
            tooltip.style.top = `${event.pageY + 15}px`;
        }
    }

    function hideTooltip() {
        tooltip.style.display = 'none';
    }

    document.querySelectorAll('.talent').forEach(talent => {
        talent.addEventListener('mouseout', hideTooltip);
        talent.addEventListener('mouseover', showTooltip);
    });

    const talentDependencies = {
        'talent2': ['talent1'],
        'talent3': ['talent1'],
        'talent4': ['talent2'],
        'talent5': ['talent3'],
        'talent6': ['talent3'],
        'talent7': ['talent3'],
        'talent8': ['talent4'],
        'talent9': ['talent4'],
    };

    // Update this function to ensure talents are correctly re-locked
    function updateTalentStates() {
        // Iterate over all talents
        Object.keys(talentDependencies).forEach(talentId => {
            const prerequisites = talentDependencies[talentId];
            const talentElement = document.getElementById(talentId);
            // Check if all prerequisites are selected
            const allPrerequisitesMet = prerequisites.every(prerequisiteId =>
                document.getElementById(prerequisiteId).classList.contains('selected'));
            // Update talent state based on prerequisites
            if (allPrerequisitesMet) {
                talentElement.classList.remove('locked');
            } else {
                talentElement.classList.add('locked');
                talentElement.classList.remove('selected'); // Deselect if prerequisites are not met
            }
        });
    }

    function selectTalent(talentId) {
        const talent = document.getElementById(talentId);
        if (talent.classList.contains('locked')) {
            console.warn('This talent is currently locked.');
            return;
        }

        talent.classList.toggle('selected');
        updateTalentStates(); // Call this after every selection change
    }

    document.querySelectorAll('.talent').forEach(talent => {
        talent.addEventListener('click', () => selectTalent(talent.id));
    });
});