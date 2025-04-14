import Container from "@/components/common/Container";
import GradientButton from "@/components/ui/GradientButton";
import GradientOutlineButton from "@/components/ui/OutlineGradientButton";
import { IoCalendarOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const Courses = () => {
  return (
    <main className="courses-page bg-gray-100 pb-10">
      <Container>
        <div className="py-5">
          <h1 className="text-4xl font-bold mb-3 text-center">Explore Our Courses</h1>
          <p className="text-gray-600 font-semibold text-center">Upskill yourself with job-ready programs. Discover the path to success.</p>
        </div>

        <div className="m-h-[100vh]">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Course Cards */}
            {
              Array(7).fill(0).map((_, index) => (
                <div key={index} className="bg-white rounded-2xl p-1 shadow-md">
                  <div
                    style={{
                      backgroundImage: "url('https://www.careergrow.org/assets/images/diploma-crs/pgdab.jpg')"
                    }}
                    className="h-[150px] bg-cover bg-center rounded-xl p-3 flex items-end"
                  >
                    <p className="text-white text-xs inline-block font-semibold bg-secondary/80 px-3 py-0.5 rounded-full">Banking</p>
                  </div>

                  <div className="p-3 pt-2 space-y-1.5">
                    <h3 className="text-xl font-semibold text-heading leading-5">Post Graduate Program In Banking</h3>
                    <p className="text-gray-600 text-sm line-clamp-2 leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga doloribus recusandae consectetur odit. Cum voluptas veniam doloribus inventore maiores.</p>

                    <div className="flex justify-between items-center text-sm text-gray-700">
                      <div className="flex items-center gap-1 ">
                        <IoCalendarOutline fontSize={16} />
                        <span>3 Months</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IoLocationOutline fontSize={16} />
                        <span>Online</span>
                      </div>
                    </div>
                    <div className="mt-2 space-y-2">
                      <GradientOutlineButton className="w-full">View Details</GradientOutlineButton>
                      <GradientButton className="w-full !py-2">Enroll Now</GradientButton>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </Container>
    </main>
  )
}

export default Courses