const OurMission = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center p-6">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-gray-900">Our Mission</h2>
        <p className="text-muted-foreground text-gray-600">
          At bitBlogs, we believe in the power of shared knowledge. Our mission
          is to create a platform where tech enthusiasts, developers, and
          innovators can come together to share ideas, learn from each other,
          and push the boundaries of what's possible in the world of technology.
        </p>
      </div>
      <div className="relative h-64 md:h-full">
        <img
          src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=400&amp;width=400"
          alt="Team collaboration"
          className="rounded-lg object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default OurMission;
