const images = [
    'https://res.cloudinary.com/dqijwldax/image/upload/v1741125642/Julie%27s%20art/ocbbsf5vatn6fpvaquk2.jpg',
    'https://res.cloudinary.com/dqijwldax/image/upload/v1741125642/Julie%27s%20art/ocbbsf5vatn6fpvaquk2.jpg',
    'https://res.cloudinary.com/dqijwldax/image/upload/v1741125642/Julie%27s%20art/ocbbsf5vatn6fpvaquk2.jpg',
    'https://res.cloudinary.com/dqijwldax/image/upload/v1741125325/Julie%27s%20art/j2vcj7mkaruu9xn0fxsv.jpg',
    'https://res.cloudinary.com/dqijwldax/image/upload/v1741125325/Julie%27s%20art/j2vcj7mkaruu9xn0fxsv.jpg',
    'https://res.cloudinary.com/dqijwldax/image/upload/v1741125325/Julie%27s%20art/j2vcj7mkaruu9xn0fxsv.jpg',
    'https://res.cloudinary.com/dqijwldax/image/upload/v1741124336/Julie%27s%20art/mgtsykfef9y58xjwjcvr.jpg',
    'https://res.cloudinary.com/dqijwldax/image/upload/v1741124336/Julie%27s%20art/mgtsykfef9y58xjwjcvr.jpg',
    'https://res.cloudinary.com/dqijwldax/image/upload/v1741124336/Julie%27s%20art/mgtsykfef9y58xjwjcvr.jpg',
  ];
  
  const MasonryGallery = () => {
    return (
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 bg-red-800">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`image-${index}`}
            className="w-full rounded-lg"
          />
        ))}
      </div>
    );
  };
  
  export default MasonryGallery;
  