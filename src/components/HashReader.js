import React from 'react'
import UserCode from 'scenes/UserCode'
import AgreementCode from 'scenes/AgreementCode'
import HomeCode from 'scenes/HomeCode'

const getFirstCharacter = text => text.charAt(0).toLowerCase()

export default ({ match }) => {
	const code = match.params.hashId
	switch (getFirstCharacter(code)) {
		case 'u':
			return <UserCode code={code} />

		case 'a':
			return <AgreementCode code={code} />

		case 'h':
			return <HomeCode code={code} />

		default:
			return (
				<div>
					<strong>{match.params.hashId}</strong> is an Invalid hash code.
					<p>For testing try adding u, a, or h as the first character.</p>
				</div>
			)
	}
}
