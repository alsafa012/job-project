import useUsersInfo from '../../../Components/hook/useUsersInfo';

const AddHousePage = () => {
     const [allUsers]=useUsersInfo()
     console.log(allUsers);
     return (
          <div>
               AddHousePage
               <p>{allUsers.length}</p>
          </div>
     );
};
export default AddHousePage;