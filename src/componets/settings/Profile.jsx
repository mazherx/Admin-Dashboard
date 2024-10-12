import { User } from "lucide-react";
import SettingSection from "./SettingSection";
import img from './img.jpg';

const Profile = () => {
	return (
		<SettingSection icon={User} title={"Profile"}>
			<div className='flex flex-col sm:flex-row items-center mb-6'>
				<img
					src={img}
					alt='Profile'
					className='rounded-full w-20 h-20 object-cover mr-4'
				/>

				<div>
					<h3 className='text-lg font-semibold text-custom-gray'>Mazher</h3>
					<p className='text-custom-gray'>mazher@example.com</p>
				</div>
			</div>

			<button className='bg-chart-color hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
				Edit Profile
			</button>
		</SettingSection>
	);
};
export default Profile;