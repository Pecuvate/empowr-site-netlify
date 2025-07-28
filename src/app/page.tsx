export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary-500 text-white py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">Empowr Brand Guide</h1>
          <p className="text-xl font-light opacity-90">
            Empowring lives through the transformative power of Experiential Learning
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-neutral-900 mb-8">Typography - Poppins Font</h2>
          <div className="space-y-6">
            <div>
              <h1 className="text-6xl font-bold text-neutral-900 mb-2">Heading 1 - Bold</h1>
              <p className="text-sm text-neutral-600">Font: Poppins, Weight: 700, Size: 3.75rem</p>
            </div>
            <div>
              <h2 className="text-5xl font-semibold text-neutral-900 mb-2">Heading 2 - Semibold</h2>
              <p className="text-sm text-neutral-600">Font: Poppins, Weight: 600, Size: 3rem</p>
            </div>
            <div>
              <h3 className="text-4xl font-medium text-neutral-900 mb-2">Heading 3 - Medium</h3>
              <p className="text-sm text-neutral-600">Font: Poppins, Weight: 500, Size: 2.25rem</p>
            </div>
            <div>
              <h4 className="text-3xl font-normal text-neutral-900 mb-2">Heading 4 - Regular</h4>
              <p className="text-sm text-neutral-600">Font: Poppins, Weight: 400, Size: 1.875rem</p>
            </div>
            <div>
              <p className="text-xl font-light text-neutral-900 mb-2">Body Text - Light</p>
              <p className="text-sm text-neutral-600">Font: Poppins, Weight: 300, Size: 1.25rem</p>
            </div>
            <div>
              <p className="text-base font-normal text-neutral-900 mb-2">
                This is regular body text. The quick brown fox jumps over the lazy dog. 
                Empowring lives through the transformative power of Experiential Learning.
              </p>
              <p className="text-sm text-neutral-600">Font: Poppins, Weight: 400, Size: 1rem</p>
            </div>
          </div>
        </section>

        {/* Brand Colors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-neutral-900 mb-8">Brand Colors</h2>
          
          {/* Primary Blue */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Primary Blue</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <div key={shade} className="text-center">
                  <div 
                    className={`h-20 rounded-lg mb-2 border border-neutral-200 ${
                      shade <= 300 ? 'bg-empowr-blue-' + shade : 'bg-empowr-blue-' + shade
                    }`}
                  ></div>
                  <p className="text-xs font-medium text-neutral-700">{shade}</p>
                  <p className="text-xs text-neutral-500">empowr-blue-{shade}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Red */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Secondary Red</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <div key={shade} className="text-center">
                  <div 
                    className={`h-20 rounded-lg mb-2 border border-neutral-200 ${
                      shade <= 300 ? 'bg-empowr-red-' + shade : 'bg-empowr-red-' + shade
                    }`}
                  ></div>
                  <p className="text-xs font-medium text-neutral-700">{shade}</p>
                  <p className="text-xs text-neutral-500">empowr-red-{shade}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Neutral Black */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">Neutral Black</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <div key={shade} className="text-center">
                  <div 
                    className={`h-20 rounded-lg mb-2 border border-neutral-200 ${
                      shade <= 300 ? 'bg-empowr-black-' + shade : 'bg-empowr-black-' + shade
                    }`}
                  ></div>
                  <p className="text-xs font-medium text-neutral-700">{shade}</p>
                  <p className="text-xs text-neutral-500">empowr-black-{shade}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-neutral-900 mb-8">Usage Examples</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Buttons */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Buttons</h3>
              <div className="space-y-3">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Primary Button
                </button>
                <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Secondary Button
                </button>
                <button className="border-2 border-primary-500 text-primary-500 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium transition-colors">
                  Outline Button
                </button>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Cards</h3>
              <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">Card Title</h4>
                <p className="text-neutral-600 mb-4">
                  This is an example card using our brand colors and Poppins font.
                </p>
                <div className="flex gap-2">
                  <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm font-medium">
                    Primary Tag
                  </span>
                  <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-sm font-medium">
                    Secondary Tag
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Semantic Colors */}
        <section>
          <h2 className="text-3xl font-semibold text-neutral-900 mb-8">Semantic Color Usage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-primary-50 border-l-4 border-primary-500 p-4">
              <h4 className="font-semibold text-primary-900 mb-2">Primary Information</h4>
              <p className="text-primary-700">Use primary colors for main actions and important information.</p>
            </div>
            <div className="bg-secondary-50 border-l-4 border-secondary-500 p-4">
              <h4 className="font-semibold text-secondary-900 mb-2">Secondary Information</h4>
              <p className="text-secondary-700">Use secondary colors for supporting actions and highlights.</p>
            </div>
            <div className="bg-neutral-50 border-l-4 border-neutral-500 p-4">
              <h4 className="font-semibold text-neutral-900 mb-2">Neutral Information</h4>
              <p className="text-neutral-700">Use neutral colors for general content and subtle elements.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
