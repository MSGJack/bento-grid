import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="wrapper">
    
  <div class="social">
      <h1>Social Media <span class="gold-text">10x</span> <em>Faster with AI</em></h1>
        <img src="/assets/illustration-five-stars.webp" />
        <p>Over 4,000 5-star reviews</p>
    </div>
    
    <div class="manage">
      <img src="/assets/illustration-multiple-platforms.webp" />
      <h2>Manage multiple accounts and platforms.</h2>
    </div>

    <div class="maintain">
      <h2>Maintain a consistent posting schedule.</h2>
      <img src="/assets/illustration-consistent-schedule.webp"/>
    </div>

    <div class="schedule">
      <h2>Schedule to social media.</h2>
      <img src="/assets/illustration-schedule-posts.webp" class="best-time"/>
      <p>Optimize post timings to publish content at the perfect time for your audience.</p>
    </div>

    <div class="followers">
      <img src="/assets/illustration-grow-followers.webp" />
      <h2>Grow followers with non-stop content.</h2>
    </div>

    <div class="faster">
      <h2><56%</h2>
      <span>faster audience growth</span>
      <img src="/assets/illustration-audience-growth.webp" />
    </div>

    <div class="create">
      <h2>Create and schedule content <span class="purple-text"><em>quicker.</em></span></h2>
      <img src="/assets/illustration-create-post.webp"/>
    </div>

    <div class="write">
      <h2>Write your content using AI.</h2>
      <img src="/assets/illustration-ai-content.webp" />
    </div>


  </div>
`;

