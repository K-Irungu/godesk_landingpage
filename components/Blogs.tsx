import React from 'react'

const Blogs = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Our Recent News</h2>
            <p className="font-light text-gray-500 sm:text-xl">Lorem ipsum dolor sit amet</p>
            {/* Centered red line */}
            <div className="w-[10%] border-b-2 border-red-500 mt-2 mx-auto"></div>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Article 1 */}
            <div className="bg-white rounded-lg shadow">
              <a href="#">
                <img className="rounded-t-lg" src="/images/post-1-650x350.jpg" alt="Article 1" />
              </a>
              <div className="p-5">
                <span className="text-sm text-gray-500">Nov, 17, 2016 - root - Uncategorized</span>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  <a href="#">Hello world!</a>
                </h3>
                <p className="mb-3 font-light text-gray-500">Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>
                <a href="#" className="inline-flex items-center font-medium border-1 border-gray-500 p-3 my-5">
                  READ MORE
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-lg shadow">
              <a href="#">
                <img className="rounded-t-lg" src="/images/post-2-650x350.jpg" alt="Article 2" />
              </a>
              <div className="p-5">
                <span className="text-sm text-gray-500">Sep, 22, 2014 - root - Uncategorized</span>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  <a href="#">Vestibulum risus nulla</a>
                </h3>
                <p className="mb-3 font-light text-gray-500">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio</p>
                <a href="#" className="inline-flex items-center font-medium border-1 border-gray-500 p-3 my-5">
                  READ MORE
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-lg shadow">
              <a href="#">
                <img className="rounded-t-lg" src="/images/post-3-650x350.jpg" alt="Article 3" />
              </a>
              <div className="p-5">
                <span className="text-sm text-gray-500">Sep, 22, 2014 - root - Uncategorized</span>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  <a href="#">Praesent tincidunt vulputate</a>
                </h3>
                <p className="mb-3 font-light text-gray-500">Fusce non hendrerit ante. Curabitur in libero neque. Nulla at vestibulum massa. Fusce feugiat tellus fermentum lorem cursus. at</p>
                <a href="#" className="inline-flex items-center font-medium border-1 border-gray-500 p-3 my-5">
                  READ MORE
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs