import { fireEvent, render, screen } from "@testing-library/react";
import { useContext } from "react";
import ContextProvider, { ContextGlobal } from "../Components/utils/global.context";




describe("testing context", () => {
	test("create mockComponent with context", () => {
		const Component = () => {
			const context = useContext(ContextGlobal);
			const btnText = context && context.state.palette.mode;

			return (
				<div className="mainContainer" style={context?.state}>
					<header className="headerContainer">
						<nav>
							<button
								style={{
									border: "none",
									padding: "10px",
									borderRadius: "5px",
									cursor: "pointer",
									fontWeight: "bolder",
									textTransform: "capitalize",
								}}
								onClick={() =>
									context?.dispatch({ type: context?.state.palette.mode })
								}
							>
								{btnText}
							</button>
						</nav>
					</header>
				</div>
			);
		};

		const Provider = () => (
			<ContextProvider>
				<Component />
			</ContextProvider>
		);

		render(<Provider />);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement.textContent).toBe("light");
		fireEvent.click(buttonElement);
		expect(buttonElement.textContent).toBe("dark");
	});
});
