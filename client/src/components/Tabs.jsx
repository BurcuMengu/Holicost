export default function Tabs ({ children, buttons, ButtonsContainer = "menu" }) {
    //const ButtonsConstainer = buttonsContainer;
    return <>
        <menu>
            <ButtonsContainer>{buttons}</ButtonsContainer>
        </menu>
        {children}
    </>
}