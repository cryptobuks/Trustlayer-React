import React, { useState } from 'react'
import styled from '@emotion/styled'
import UserBlurb from 'components/UserBlurb'
import AgreementBox from 'components/AgreementBox'
import PdfButton from 'components/buttons/BlueOutline'
import { useHttp } from 'hooks/http'
import SSOModal from 'components/sso/SSOModal'
import _ from 'lodash'

const Root = styled.div`
	margin: 40px 0 80px;
`

const Container = styled.div`
	max-width: 670px;
	margin: 0 auto;
`

const ButtonContainer = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
`

export default ({ code }) => {
	const [isLoading, fetchedData] = useHttp(`get/agreement/${code}`)

	const user1 = _.get(fetchedData, 'user1', {})
	const user2 = _.get(fetchedData, 'user2', {})
	const agreementContent = _.get(fetchedData, 'form.content', '')
	const hash = _.get(fetchedData, 'agreement.form_hash', '')

	const [isSsoOpen, setSsoState] = useState(false)

	const getPdf = () => {
		setSsoState(true)
	}

	return (
		<Root>
			<Container>
				<UserBlurb
					avatarUrl={user1.avatar_url}
					name={user1.full_name}
					email={user1.email}
				/>
				<UserBlurb
					avatarUrl={user2.avatar_url}
					name={user2.full_name}
					email={user2.email}
				/>
				<AgreementBox hash={hash} agreement={agreementContent} />

				<SSOModal action="get-pdf" link={code} open={isSsoOpen} />
				<ButtonContainer>
					<PdfButton text="GET PDF" onClick={getPdf} />
				</ButtonContainer>
			</Container>
		</Root>
	)
}
