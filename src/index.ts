interface User {
	name: string;
	age: number;
	id: number;
	createdAt: Date;
}

type UserProfile = Pick<User, 'name' | 'age'>;

const displayUserProfile = (user: UserProfile) => {
	console.log(`Name: ${user.name} age: ${user.age}`);
};
