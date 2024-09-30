

function Compforstaff({sno,name,designation}){
    return (
        <tr>
            <td className=" text-center bg-slate-200">{sno}</td>
            <td className=" text-left bg-slate-200">{name}</td>
            <td className=" text-left bg-slate-200">{designation}</td>
        </tr>
    );
}
export default Compforstaff;