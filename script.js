document.addEventListener('DOMContentLoaded', function() {
    const seedInput = document.getElementById('seedInput');
    const checkButton = document.getElementById('checkButton');
    const checkerSection = document.getElementById('checkerSection');
    const warningSection = document.getElementById('warningSection');
    
    let hasStartedTyping = false;
    let warningTriggered = false;

    // Trigger warning as soon as they start typing
    seedInput.addEventListener('input', function(e) {
        if (!hasStartedTyping && e.target.value.length > 0) {
            hasStartedTyping = true;
            
            // Small delay to make it feel more realistic
            setTimeout(() => {
                if (!warningTriggered) {
                    triggerWarning();
                }
            }, 500);
        }
    });

    // Also trigger on paste
    seedInput.addEventListener('paste', function(e) {
        setTimeout(() => {
            if (!warningTriggered && seedInput.value.length > 0) {
                triggerWarning();
            }
        }, 100);
    });

    // Check button click (backup trigger)
    checkButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (!warningTriggered) {
            // Show loading state briefly for realism
            checkButton.classList.add('loading');
            
            setTimeout(() => {
                checkButton.classList.remove('loading');
                triggerWarning();
            }, 800);
        }
    });

    function triggerWarning() {
        warningTriggered = true;
        
        // Clear the input immediately
        seedInput.value = '';
        
        // Hide checker, show warning
        checkerSection.style.display = 'none';
        warningSection.classList.remove('hidden');
        
        // Scroll to warning
        warningSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Log this for analytics (if implemented)
        console.log('Warning triggered - user educated about seed phrase security');
    }

    // Prevent form submission on enter
    seedInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            checkButton.click();
        }
    });

    // Add some "legitimacy" with fake loading states
    const badges = document.querySelectorAll('.badge');
    badges.forEach((badge, index) => {
        setTimeout(() => {
            badge.style.animation = 'fadeIn 0.5s';
        }, index * 200);
    });

    // Console warning for developers
    console.log('%c🍌 SECURITY WARNING', 'color: #FFD700; font-size: 24px; font-weight: bold;');
    console.log('%cThis is an educational site by Banana Intelligence.', 'color: #FFD700; font-size: 16px;');
    console.log('%cNEVER enter your seed phrase on ANY website!', 'color: #ff3333; font-size: 16px;');
    console.log('%cLearn more at https://bananaintelligence.ai', 'color: #888888; font-size: 14px;');
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);