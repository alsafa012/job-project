import { useForm } from "react-hook-form";
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import WebsiteTitle from '../../../Shared/WebsiteTitle/WebsiteTitle';
import Container from '../../../Shared/Container/Container';
import useAxiosPublic from "../../../Components/hook/useAxiosPublic";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateHouseDetails = () => {
     const houseDetails=useLoaderData()
     console.log(houseDetails);
     const {_id,image}=houseDetails;
     const { register, handleSubmit } = useForm();
     const axiosPublic = useAxiosPublic();
     const location = useLocation()
     console.log(location.pathname);
     const navigate = useNavigate();
     // const from = location.state || '/'
     // navigate(from, { replace: true });
     const from = location?.state || "/"
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
               const updateHouseDetails = {
                    email: userInfoFromLocalStorage.email,
                    name: data.name,
                    address: data.address,
                    city: data.city,
                    bedrooms: parseFloat(data.bedrooms),
                    bathrooms: parseFloat(data.bathrooms),
                    phone: data.phone,
                    roomSize: data.roomSize,
                    rentPerMonth: parseFloat(data.rentPerMonth),
                    availability: data.date,
                    description: data.description,
                    image: res.data.data.display_url || image,
                    rentCount: 0,
               };
               console.log(updateHouseDetails);
               
               const contextRes = await axiosPublic.put(`/ownerCollections/${_id}`,updateHouseDetails);
               // console.log(contextRes.data);
               // console.log("object");
               if (contextRes.data.modifiedCount > 0) {
                    Swal.fire({
                         title: "Good job!",
                         text: "contest updated successfully",
                         icon: "success",
                    });
                    navigate(from, {replace:true});
               }
               // reset();
          }
          console.log(res.data);
     };
     return (
          <div className='pt-16 light-bg'>
               <Container>
               <WebsiteTitle title={"Owner || Update House Details"}></WebsiteTitle>
               <SectionTitle subHeading={"Update House Details"}></SectionTitle>
               <div className="bg- p-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                         <div className="space-y-3 font-medium">
                              <div className="grid md:grid-cols-2 md:gap-5">
                                   {/* House Owner's name */}
                                   <div className="form-control w-full">
                                        <label className="label">
                                             <span className="text-white">
                                             House Owner's Name*
                                             </span>
                                        </label>
                                        <input
                                             {...register("name", {
                                                  required: true,
                                             })}
                                             defaultValue={houseDetails.name}
                                             type="text"
                                             placeholder="House Owner's Name"
                                             className="input input-bordered w-full text-black"
                                        />
                                   </div>
                                   {/* House Owner's Email */}
                                   <div className="form-control w-full">
                                        <label className="label">
                                             <span className="text-white">
                                             House Owner's Email*
                                             </span>
                                        </label>
                                        <input
                                             {...register("email", {
                                                  required: true,
                                             })}
                                             value={houseDetails?.email}
                                             type="text"
                                             placeholder="House Owner's Email"
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
                                             defaultValue={houseDetails.address}
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
                                             defaultValue={houseDetails.city}
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
                                             defaultValue={houseDetails.bedrooms}
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
                                             defaultValue={houseDetails.bathrooms}
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
                                             defaultValue={houseDetails.roomSize}
                                             type="text"
                                             placeholder="House Room Size"
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
                                             defaultValue={houseDetails.rentPerMonth}
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
                                             defaultValue={houseDetails.phone}
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
                                             defaultValue={houseDetails.availability}
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
                                        defaultValue={houseDetails.description}
                                        className="textarea textarea-bordered text-black"
                                        placeholder="Description"
                                   ></textarea>
                              </div>
                              {/* image */}
                              <div className="form-control w-full">
                                   <input
                                        {...register("image")}
                                        type="file"
                                        // defaultValue={image}
                                        required
                                        className="file-input text-white file-input-ghost w-full max-w-xs"
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
          </div>
     );
};

export default UpdateHouseDetails;