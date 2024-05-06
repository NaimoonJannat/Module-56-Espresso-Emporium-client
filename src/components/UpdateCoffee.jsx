import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, chef, category, details, photo} = coffee;
    
    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;

        const name=form.name.value;
        const chef=form.chef.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;

        const user = {name, chef, category, details, photo}
        console.log(user);

        // send data to the server 
        fetch(`https://espresso-server-three.vercel.app/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                    title: "Success!",
                    text: "Coffee updated successfully",
                    icon: "success",
                    confirmButtonText: 'cool'
                  });
                  form.reset();
            
        })

    }

    return (
        <div className="w-4/5 mx-auto text-center bg-[#F4F3F0] md:my-14 p-8">
            <h2 className="text-3xl font-extrabold">Update Coffee :{name}</h2>
            <div>
            <form onSubmit={handleUpdateCoffee}>
                <div className="flex flex-col gap-5 md:flex-row mb-5">
                <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full md:w-1/2 " />
                <input type="text" name="chef" defaultValue={chef} placeholder="Chef" className="input input-bordered md:w-1/2 w-full" />
                </div>
                <div className="flex flex-col gap-5 md:flex-row mb-5">
                <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full md:w-1/2 " />
                <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered md:w-1/2 w-full" />
                </div>
                <div className="mb-5">
                <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                </div>
  <input type="submit" className="btn bg-[#D2B48C] btn-block" value="Update Coffee"  />
    

            </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;