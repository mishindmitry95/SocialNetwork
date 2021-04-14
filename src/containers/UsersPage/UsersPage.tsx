import React from 'react';
import { useSelector } from 'react-redux';
import { Users } from '../../components/Users/Users';
import { getIsFetching } from '../../redux/selectors/users-selectors';
import Preloader from '../../components/UI/Preloader/Preloader';

const UsersPage = () => {
	const isFetching = useSelector(getIsFetching);

	return isFetching ? <Preloader/> : <Users />;
};

export default UsersPage;