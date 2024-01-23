import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import WebsiteTitle from "../../../Shared/WebsiteTitle/WebsiteTitle";
import Container from "../../../Shared/Container/Container";
import useAxiosPublic from "../../../Components/hook/useAxiosPublic";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddHousePage = () => {
     const { register, handleSubmit, reset } = useForm();
     const axiosPublic = useAxiosPublic();
     const navigate = useNavigate();
     const userInfoFromLocalStorage = JSON.parse(
          localStorage.getItem("user")
     );
     // console.log(userInfoFromLocalStorage.email)
     const onSubmit = async (data) => {
          console.log(data);
          //image upload to imgbb and then get an url
          const imageFile = { image: data.image[0] };
          const res = await axiosPublic.post(image_hosting_api, imageFile, {
               headers: { "Content-Type": "multipart/form-data" },
          });
          // const userInfoFromLocalStorage = JSON.parse(
          //      localStorage.getItem("user")
          // );
          // console.log(userInfoFromLocalStorage);
          
          if (res.data.success) {
               // send the menuitem data to the data with the image url
               const addHouseDetails = {
                    email: userInfoFromLocalStorage.email,
                    name: data.name,
                    address: data.address,
                    city: data.city,
                    bedrooms: parseFloat(data.bedrooms),
                    bathrooms: parseFloat(data.bathrooms),
                    phone: data.phone,
                    roomSize: parseFloat(data.roomSize),
                    rentPerMonth: parseFloat(data.rentPerMonth),
                    availability: data.date,
                    description: data.description,
                    image: res.data.data.display_url,
                    rentCount: 0,
                    status: "pending",
               };
               console.log(addHouseDetails);
               const houseCollections = await axiosPublic.post(
                    "/ownerCollections",
                    addHouseDetails
               );
               console.log(houseCollections.data);
               // console.log("object");
               if (houseCollections.data.insertedId) {
                    navigate('/dashboard/ownerHouseList')
                    Swal.fire({
                         title: "Good job!",
                         text: `${data.name} House added Successfully`,
                         icon: "success",
                    });
               }
               reset();
          }
          console.log(res.data);
     };

     return (
          <Container>
               <WebsiteTitle title={"Owner || Add House"}></WebsiteTitle>
               <SectionTitle subHeading={"Add House For Rent"}></SectionTitle>
               <div className="bg- p-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                         <div className="space-y-3 font-medium">
                              <div className="grid md:grid-cols-2 md:gap-5">
                                   {/* House name */}
                                   <div className="form-control w-full">
                                        <label className="label">
                                             <span className="text-white">
                                                  House Name*
                                             </span>
                                        </label>
                                        <input
                                             {...register("name", {
                                                  required: true,
                                             })}
                                             type="text"
                                             placeholder="House Name"
                                             className="input input-bordered w-full text-black"
                                        />
                                   </div>
                                   {/* House address */}
                                   <div className="form-control w-full">
                                        <label className="label">
                                             <span className="text-white">
                                                  House address*
                                             </span>
                                        </label>
                                        <input
                                             {...register("address", {
                                                  required: true,
                                             })}
                                             type="text"
                                             placeholder="House address"
                                             className="input input-bordered w-full text-black"
                                        />
                                   </div>
                                   {/* House city */}
                                   <div className="form-control w-full">
                                        <label className="label">
                                             <span className="text-white">
                                                  House City*
                                             </span>
                                        </label>
                                        <input
                                             {...register("city", {
                                                  required: true,
                                             })}
                                             type="text"
                                             placeholder="House city"
                                             className="input input-bordered w-full text-black"
                                        />
                                   </div>
                                   {/* House bedrooms */}
                                   <div className="form-control w-full">
                                        <label className="label">
                                             <span className="text-white">
                                                  House Bedrooms*
                                             </span>
                                        </label>
                                        <input
                                             {...register("bedrooms", {
                                                  required: true,
                                             })}
                                             type="text"
                                             placeholder="House Bedrooms"
                                             className="input input-bordered w-full text-black"
                                        />
                                   </div>
                                   {/* House bathrooms */}
                                   <div className="form-control w-full">
                                        <label className="label">
                                             <span className="text-white">
                                                  House Bathrooms*
                                             </span>
                                        </label>
                                        <input
                                             {...register("bathrooms", {
                                                  required: true,
                                             })}
                                             type="text"
                                             placeholder="House Bathrooms"
                                             className="input input-bordered w-full text-black"
                                        />
                                   </div>
                                   {/* House room size */}
                                   <div className="form-control w-full">
                                        <label className="label">
                                             <span className="text-white">
                                                  House room size*
                                             </span>
                                        </label>
                                        <input
                                             {...register("roomSize", {
                                                  required: true,
                                             })}
                                             type="text"
                                             placeholder="House Room Size"
                                             className="input input-bordered w-full text-black"
                                        />
                                   </div>
                                   {/* House bathrooms */}
                                   <div className="form-control w-full">
                                        <label className="label">
                                             <span className="text-white">
                                                  House Bathrooms*
                                             </span>
                                        </label>
                                        <input
                                             {...register("bathrooms", {
                                                  required: true,
                                             })}
                                             type="text"
                                             placeholder="House Bathrooms"
                                             className="input input-bordered w-full text-black"
                                        />
                                   </div>

                                   {/*Home rent per month */}
                                   <div className="form-control w-full">
                                        <label className="label">
                                             <span className="text-white">
                                                  Home Rent Per Month*
                                             </span>
                                        </label>
                                        <input
                                             {...register("rentPerMonth", {
                                                  required: true,
                                             })}
                                             type="text"
                                             placeholder="Home Rent Per Month"
                                             className="input input-bordered w-full text-black"
                                        />
                                   </div>
                                   {/* Owner's Contact Number */}
                                   <div className="form-control w-full">
                                        <label className="label">
                                             <span className="text-white">
                                                  Owner's Contact Number*
                                             </span>
                                        </label>
                                        <input
                                             {...register("phone", {
                                                  required: true,
                                             })}
                                             type="text"
                                             placeholder="Owner's Contact Number"
                                             className="input input-bordered w-full text-black"
                                        />
                                   </div>

                                   {/* Home availability date */}
                                   <div className="form-control w-full">
                                        <label className="label">
                                             <span className="text-white">
                                                  Home Availability Date*
                                             </span>
                                        </label>
                                        <input
                                             {...register("date", {
                                                  required: true,
                                             })}
                                             type="date"
                                             placeholder="Price Money"
                                             className="input input-bordered w-full text-black"
                                        />
                                   </div>
                              </div>
                              {/* Home Description*/}
                              <div className="form-control w-full">
                                   <label className="label">
                                        <span className="text-white">
                                             Home Description*
                                        </span>
                                   </label>
                                   <textarea
                                        {...register("description", {
                                             required: true,
                                        })}
                                        className="textarea textarea-bordered text-black"
                                        placeholder="Description"
                                   ></textarea>
                              </div>
                              {/* image */}
                              <div className="form-control w-full">
                                   <input
                                        {...register("image")}
                                        type="file"
                                        className="file-input file-input-ghost w-full max-w-xs"
                                   />
                              </div>
                         </div>
                         <div className="text-center my-2">
                              <button className="btn primary-btn w-full text-center red">
                                   Add House for Rent
                              </button>
                         </div>
                    </form>
               </div>
          </Container>
     );
};

export default AddHousePage;
