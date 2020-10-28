import React from 'react';
import { Header, OptForm, Feature } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function HeaderContainer() {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>

            <Feature>
                <Feature.Title>
                    Unlimited Films, TV programmes and more.
                </Feature.Title>
                <Feature.SubTitle>
                    Watch anywhere. Cancel at any time.
                </Feature.SubTitle>
            </Feature>

            <OptForm>
                <OptForm.Text>
                    Ready to watch? Enter your email to create or start your membership
                </OptForm.Text>
                <OptForm.Break/>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Get Started</OptForm.Button>
            </OptForm>
        </Header>
    );
}