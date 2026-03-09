"use client"

import { usePathname } from "next/navigation";
import { CheckoutStep } from "./CheckoutStep";


const CHECKOUT_STEPS = [
	{
		title: "Cart",
		stepName: "Shopping cart",
		path: "/checkout/cart",
	},
	{
		title: "Checkout",
		stepName: "Checkout details",
		path: "/checkout/details",
	},
	{
		title: "Complete",
		stepName: "Order complete",
		path: "/checkout/complete",
	},
] as const;

function getStepStatus(
	stepIndex: number,
	currentStepIndex: number,
): CheckoutStepStatus {
	if (stepIndex < currentStepIndex) return "completed";
	if (stepIndex === currentStepIndex) return "inProgress";
	return "disabled";
}

export function CheckoutHeader() {
	const pathname = usePathname();
  const currentStepIndex = CHECKOUT_STEPS.findIndex((step) =>
		pathname.startsWith(step.path),
	);
	return (
		<section className='flex flex-col w-full gap-10 justify-center'>
			<h2 className='text-54 font-500 leading-100 text-black text-center'>
				{CHECKOUT_STEPS[currentStepIndex].title}
			</h2>
			<div className='flex flex-row w-full gap-8 justify-center'>
				{CHECKOUT_STEPS.map((step, index) => (
					<CheckoutStep
						key={step.path}
						count={index + 1}
						title={step.title}
						status={getStepStatus(index, currentStepIndex)}
					/>
				))}
			</div>
		</section>
	);
}
