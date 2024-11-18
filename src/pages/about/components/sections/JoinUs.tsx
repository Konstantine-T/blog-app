const JoinUs = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold mb-4">Join Us on Our Journey</h2>
      <p className="text-muted-foreground mb-6">
        Whether you're a seasoned developer, a curious beginner, or somewhere in
        between, there's a place for you at bitBlogs. Let's shape the future of
        technology together.
      </p>
      <a
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8"
        href="/register"
      >
        Get Started Today
      </a>
    </div>
  );
};

export default JoinUs;
