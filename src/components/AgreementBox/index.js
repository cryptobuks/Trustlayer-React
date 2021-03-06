import React from 'react'
import styled from '@emotion/styled'
import Avatars from 'components/Avatars'
import Agreement from 'components/Agreement'
import Menu from './Menu.js'

const VerificationCode = styled.p`
	background: #ddd;
`

const Root = styled.div`
	background: white;
	border-radius: 6px;
	padding: 20px;
`

export default ({ avatars, hash = '', agreement, showMenu = false }) => (
	<Root>
		{showMenu && <Menu />}
		<Avatars avatars={avatars} />
		<Agreement agreement={agreement} />
		<VerificationCode>Verification code {hash}</VerificationCode>
	</Root>
)
