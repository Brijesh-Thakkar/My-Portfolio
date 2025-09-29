import { useEffect, useState } from 'react';

const AsteroidShower = () => {
  const [asteroids, setAsteroids] = useState<Array<{
    id: number;
    left: number;
    delay: number;
    duration: number;
    size: number;
  }>>([]);

  useEffect(() => {
    const generateAsteroids = () => {
      const newAsteroids = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 3 + Math.random() * 4,
        size: 1 + Math.random() * 2,
      }));
      setAsteroids(newAsteroids);
    };

    generateAsteroids();
  }, []);

  return (
    <div className="asteroid-shower">
      {asteroids.map((asteroid) => (
        <div
          key={asteroid.id}
          className="asteroid"
          style={{
            left: `${asteroid.left}%`,
            animationDelay: `${asteroid.delay}s`,
            animationDuration: `${asteroid.duration}s`,
            width: `${asteroid.size}px`,
            height: `${asteroid.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default AsteroidShower;