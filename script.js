* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: #080810;
    color: #ffffff;
    overflow-x: hidden;
    min-height: 100vh;
}

#container {
    position: relative;
    width: 100%;
    z-index: 2;
}

#content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 80px 20px;
}

header {
    text-align: center;
    margin-bottom: 80px;
}

.badge {
    display: inline-block;
    background: rgba(59, 130, 246, 0.2);
    color: #3b82f6;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 15px;
    border: 1px solid rgba(59, 130, 246, 0.3);
}

header h1 {
    font-size: 3.2rem;
    background: linear-gradient(45deg, #3b82f6, #10b981);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 15px;
    line-height: 1.2;
}

header p {
    color: #a1a1aa;
    font-size: 1.1rem;
}

h2 {
    font-size: 1.8rem;
    margin-bottom: 30px;
    border-left: 4px solid #3b82f6;
    padding-left: 15px;
}

.skill-cards, .resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-bottom: 70px;
}

.card, .resource {
    background: rgba(255, 255, 255, 0.03);
    padding: 30px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
}

.card:hover {
    background: rgba(59, 130, 246, 0.05);
    border-color: #3b82f6;
    transform: translateY(-8px);
}

.card-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
}

.roadmap-steps {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 80px;
}

.step {
    background: rgba(255, 255, 255, 0.03);
    padding: 25px;
    border-radius: 20px;
    text-align: center;
    width: 250px;
    border: 1px solid rgba(255, 255, 255, 0.08);
}

.step-number {
    width: 45px;
    height: 45px;
    background: linear-gradient(45deg, #3b82f6, #10b981);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-weight: bold;
}

.resource ul {
    list-style: none;
    margin-top: 15px;
}

.resource li {
    padding: 5px 0;
    color: #a1a1aa;
}

#particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

@media (max-width: 768px) {
    header h1 { font-size: 2.2rem; }
}
