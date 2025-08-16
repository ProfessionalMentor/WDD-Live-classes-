import main from "../assets/main.jpg"
import Avatar from './Avatar';

function Profile() {
  return (
    <div>
      <Avatar
        src={main}
        caption="This is man image"
      />
     
    </div>
  );
}

export default Profile;