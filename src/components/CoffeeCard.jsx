import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, name, chef, category, details, photo} = coffee;
    
    const handleDelete = _id =>{
      console.log(_id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://espresso-server-three.vercel.app/coffee/${_id}`,
            {method : 'DELETE',
              
            }
          )
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            if(data.deletedCount>0){
              Swal.fire({
            title: "Deleted!",
            text: "Your Coffee has been deleted.",
            icon: "success"
          });
          const remaining = coffees.filter(cof=> cof._id !==_id);
          setCoffees(remaining);
            }
          })

        }
      });
    }

    return (
        <div className="hero bg-[#F4F3F0]">
  <div className="hero-content gap-6 md:flex-row">
    <img src={photo} className="w-1/3 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <p>{details}</p>
      <p>{chef}</p>
      <p>{category}</p>
    </div>
    <div className="flex flex-end flex-col gap-2">
        <button className="btn bg-[#D2B48C] btn-square btn-outline"><FaEye /></button>
        <Link to={`updatecoffee/${_id}`}><button className="btn bg-[#D2B48C] btn-square btn-outline"><MdEdit /></button></Link>
        <button onClick={() => handleDelete(_id)} className="btn bg-red-600 btn-square btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
    </div>
  </div>
</div>
    );
};

export default CoffeeCard;