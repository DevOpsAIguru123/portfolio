document.addEventListener('DOMContentLoaded', () => {
    const text = "Hello, I'm Vinod, a sr DevOps and Cloud Engineer with a passion for optimizing and automating the software development lifecycle. With extensive expertise in Linux, cloud computing, and a range of DevOps tools, I specialize in creating efficient, scalable, and secure infrastructure solutions. My experience spans across deploying and managing applications in various cloud environments, leveraging technologies like Docker, Kubernetes, Terraform, and Azure DevOps to streamline workflows and enhance productivity. Whether it's setting up Kubernetes clusters, implementing CI/CD pipelines, or ensuring the seamless";
    const commandOutput = document.getElementById('command-output');
    const cursor = document.querySelector('.cursor');
    let index = 0;

    function type() {
        if (index < text.length) {
            commandOutput.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust delay between each character
        } else {
            clearInterval(cursorBlinking); // Stop cursor blinking when typing is done
            cursor.style.display = 'none'; // Optionally hide cursor after typing is done
        }
    }

    type();

    // Keep the cursor blinking indefinitely
    const cursorBlinking = setInterval(() => {
        if (cursor.style.display === 'none') {
            cursor.style.display = 'inline-block';
        } else {
            cursor.style.display = 'none';
        }
    }, 500); // Blinking interval for the cursor
});
