
// const video = 'https://profile-site-assets-20241118.s3.us-east-2.amazonaws.com/water.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVVZPCHFYHN7FCDO5%2F20241118%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20241118T202852Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIGVru8zqzGnVnN7SHTpIFUrNIaP8abRJnYq5UQ5bYTRPAiEAzSosImkUC9XaPSemz1SeKsjnhaLtgPEl8rMNZHI4B60qmQIIZhAAGgwzOTA0MDM4NjQ5NDQiDPdrCHnzfDpjTHbWXCr2AaN4uEqPlP%2BY1z5CrPZ75h%2FSfisodE1%2FifJ%2FcdGfR%2FYpnV6VaPC%2FubPI%2F45NQH81u2bGWr7j5e990KJdnRhDkM8CgAwYLlZMQkfdceB%2F8JGu48nFc0TpoOa5eXwmyLqQ4gYAKIbYMZJBk0BXIuXKE2fgoix50p5HZ%2FaJURDDmbtQ%2B84j8XUOHZc8WR6kYLFTXmzFRx9N40lbW6YHushQ3OZQFdkUFo3J5GVg6gu4QIMleNO0UbWseBI1gnB%2FotAywxMMKVaZF0yUZpHm8mfoRgJLMNpX%2BmPkA2LIA6agdDkk6Pfa2C50AGAf5C7aY0vlr9%2Fle%2FzxdjDVwe65BjrfAYgmuG89JS6KJRPrKj0%2FZajEo6f2CGxAaR15TkUhPf0ceJDAdyKa4lPkQU556k6Z6aWUEv7Pq4moNDVCz%2FtyXbROzb7hV3NUOqJEi99uuAtrl2CjF1rzKVTjN8zZKmcwba%2FPykD0SgdniQfiFUpiDfY%2BQlz8l8ZktvlAnlA6uJxkqM56pqOBN2v1P9Ff%2FJ3GfDcifylAj8P1JKM3trTTqrMCz6MzNxB4sPeBI5aGgOzi1g3erGTRyhSSg69OoOv7rEqUVI1UTKCCu7SPiafu%2FDK6NBp%2B7RuUkzVtS5kD9no%3D&X-Amz-Signature=3df05e06b355fe10786d691f36878949d01aec2b15df9cb71c36505b09c39c6f&X-Amz-SignedHeaders=host&response-content-disposition=inline'

// const video2 = 'https://profile-site-assets-20241118-access-390403864944.s3-accesspoint.us-east-2.amazonaws.com/water.mp4'

import coast from '../assets/coast.jpeg'

export default function MainVideo() {
  return (
    <div className="min-h-[100vh]">
      {/* <video src={video} autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
      </video> */}
      <img src={coast} className="absolute top-0 left-0 w-full h-full object-cover"></img>
    </div>
  )
}