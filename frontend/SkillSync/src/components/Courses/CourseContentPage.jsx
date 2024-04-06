import React from "react";
import { useParams } from "react-router-dom";

function CourseContentPage() {
  const { id } = useParams();

  // Mock course data
  const course = {
    courseName: "Web Development Fundamentals",
    description:
      "Learn the basics of web development with HTML, CSS, and JavaScript.",
    price: "$49.99",
    skillCategory: "Programming",
    thumbnail: "https://via.placeholder.com/800x400",
    instructor: "Emiway Bantai",
  };

  return (
    <div className="bg-gray-100 min-h-screen mt-2">
      {/* Course header */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="md:flex items-center justify-between">
            <div className="mt-4 md:mt-0 md:ml-6">
              <h1 className="text-4xl font-semibold mb-4">
                {course.courseName}
              </h1>
              <p className="text-gray-600 mb-4 text-xl">
                By {course.instructor}
              </p>
              <p className="text-gray-600 mb-4 text-l">
                Skill Category: {course.skillCategory}
              </p>

              <p className="font-semibold text-xl">Price: {course.price}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={course.thumbnail}
                alt="Course Thumbnail"
                className="w-full md:w-96 rounded-lg shadow-lg"
              />
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-2 focus:outline-none hover:bg-blue-600">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Course content */}
      {/* Course content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-semibold mb-6">Course Overview</h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            vitae reiciendis laboriosam aperiam culpa aliquam fuga, pariatur ad
            sit minima, totam fugit quisquam unde. Laudantium odio at assumenda
            iure quisquam. Sunt sequi molestiae quo natus laborum, impedit odio
            iste quas. Ipsum, odio error vero recusandae voluptatem commodi
            veritatis nostrum assumenda sunt dolore ipsam veniam asperiores quas
            possimus omnis obcaecati ipsa. Rem porro non at minus blanditiis
            facere neque sed, nemo odit earum commodi eum quas corporis aliquam
            illum laborum quasi cumque nihil sapiente dolores dolore quidem
            provident sequi. Molestiae, quos! Iste nostrum aspernatur voluptatum
            ab. Odio excepturi voluptate provident harum placeat explicabo ut
            delectus perspiciatis minima suscipit in obcaecati quos praesentium
            reiciendis veritatis sunt ad inventore, autem illum qui impedit!
            Perspiciatis earum ipsam quibusdam recusandae at quaerat laudantium
            doloremque exercitationem, blanditiis repudiandae repellat fuga?
            Mollitia accusantium nobis totam sapiente repudiandae optio a,
            deserunt nisi voluptate, officia veniam doloremque necessitatibus
            quisquam. Laboriosam voluptas deserunt inventore eaque culpa quaerat
            rerum labore voluptate maiores aut debitis animi vel, asperiores
            temporibus quibusdam. Dolorem ipsa saepe doloribus placeat neque
            animi impedit aut, quae quibusdam amet? Recusandae vel culpa commodi
            qui sapiente quibusdam ullam modi doloremque vitae voluptate eaque
            amet minus, accusamus voluptatibus natus asperiores ab possimus rem
            iure saepe nisi veritatis? Consectetur, aliquam. Saepe, minus. Dicta
            incidunt officia, debitis aliquam deserunt quibusdam mollitia
            ducimus cum ad nesciunt nihil tempore doloremque? Aperiam eaque
            asperiores tempora odio ut modi, deserunt reprehenderit commodi
            vero. Illum excepturi cum itaque! Corrupti eius hic illo ea
            excepturi in id commodi accusantium omnis nisi consequuntur dolorum
            esse, quibusdam beatae ab tenetur reprehenderit. Ratione quae iure,
            recusandae nulla eius laboriosam reprehenderit dolor sint. Accusamus
            amet quam neque similique vel labore quisquam soluta magnam saepe
            cupiditate ab debitis et necessitatibus sequi, nemo quibusdam
            corporis atque temporibus, numquam aspernatur fugiat consequuntur
            voluptate esse voluptas. Facere!
          </p>

          {/* Instructor/Author */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">About Instructor</h3>
            <div className="flex items-center">
              <div>
                <h4 className="font-semibold">Emiway</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Corporis rerum numquam perspiciatis, hic ratione voluptate
                  atque aperiam pariatur eveniet illum voluptatem nisi velit
                  maiores facere quia qui odio ipsa a! Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Odit cupiditate suscipit
                  molestiae sit fuga perspiciatis sequi natus vel hic ut
                  deleniti modi tempora cumque tenetur ea, incidunt saepe ipsa
                  iure?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseContentPage;
