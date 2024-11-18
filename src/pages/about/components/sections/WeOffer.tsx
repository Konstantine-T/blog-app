const WeOffer = () => {
  return (
    <div className="space-y-8 p-6">
      <h2 className="text-3xl font-semibold text-center">What We Offer</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border bg-card text-card-foreground shadow-lg">
          <div className="flex flex-col space-y-1.5 p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-book-open w-10 h-10 text-primary mb-2"
            >
              <path d="M12 7v14"></path>
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
            </svg>
            <div className="font-semibold leading-none tracking-tight">
              Rich Content
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="text-sm text-muted-foreground">
              Access a wide range of articles, tutorials, and insights on the
              latest tech trends and best practices.
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card text-card-foreground shadow-lg">
          <div className="flex flex-col space-y-1.5 p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-users w-10 h-10 text-primary mb-2"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <div className="font-semibold leading-none tracking-tight">
              Vibrant Community
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="text-sm text-muted-foreground">
              Connect with like-minded individuals, share your knowledge, and
              grow your professional network.
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card text-card-foreground shadow-lg">
          <div className="flex flex-col space-y-1.5 p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-zap w-10 h-10 text-primary mb-2"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            <div className="font-semibold leading-none tracking-tight">
              Cutting-edge Topics
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="text-sm text-muted-foreground">
              Stay ahead of the curve with content covering emerging
              technologies and innovative solutions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
