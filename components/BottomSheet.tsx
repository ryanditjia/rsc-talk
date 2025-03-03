'use client'
import { Drawer } from 'vaul'

const IconCross = ({ size, className }: { size: number; className?: string }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 40 40"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<path
			d="M32.5765 29.9235C32.9287 30.2757 33.1266 30.7534 33.1266 31.2516C33.1266 31.7497 32.9287 32.2275 32.5765 32.5797C32.2243 32.932 31.7465 33.1298 31.2484 33.1298C30.7502 33.1298 30.2725 32.932 29.9202 32.5797L19.9999 22.6563L10.0765 32.5766C9.72425 32.9288 9.24651 33.1267 8.74837 33.1267C8.25023 33.1267 7.77249 32.9288 7.42024 32.5766C7.068 32.2243 6.87012 31.7466 6.87012 31.2485C6.87012 30.7503 7.068 30.2726 7.42024 29.9203L17.3437 20L7.42337 10.0766C7.07113 9.72435 6.87324 9.24661 6.87324 8.74847C6.87324 8.25032 7.07113 7.77258 7.42337 7.42034C7.77561 7.0681 8.25335 6.87021 8.75149 6.87021C9.24964 6.87021 9.72738 7.0681 10.0796 7.42034L19.9999 17.3438L29.9234 7.41878C30.2756 7.06654 30.7533 6.86865 31.2515 6.86865C31.7496 6.86865 32.2274 7.06654 32.5796 7.41878C32.9319 7.77102 33.1297 8.24876 33.1297 8.7469C33.1297 9.24505 32.9319 9.72279 32.5796 10.075L22.6562 20L32.5765 29.9235Z"
			fill="currentColor"
		/>
	</svg>
)

const BottomSheetMobileHandle = () => (
	<div className="md:hidden absolute top-[0] left-[50%] translate-x-[-50%] translate-y-[-100%] p-12">
		<div className="bg-fill-gray-light w-[5rem] h-[0.375rem] rounded-full" />
	</div>
)

export const BottomSheet = ({
	title,
	children,
	open,
	onOpenChange,
}: {
	title: string
	children: React.ReactNode
	open?: boolean
	onOpenChange?: (open: boolean) => void
}) => (
	<Drawer.Root open={open} onOpenChange={onOpenChange}>
		<Drawer.Portal>
			<Drawer.Overlay className="fixed inset-0 bg-black/50" />

			<Drawer.Content
				className="fixed bottom-0 left-0 right-0 max-h-[calc(100vh-1.875rem)] flex flex-col outline-none"
				aria-describedby={undefined}
			>
				<BottomSheetMobileHandle />

				<div className="min-h-[50vh] bg-white rounded-t-2xl relative overflow-y-auto p-5">
					<div className="flex justify-end">
						<Drawer.Close className="p-3 -m-3 outline-brand-1">
							<IconCross size={24} />
						</Drawer.Close>
					</div>

					<Drawer.Title className="my-4 font-semibold text-2xl">{title}</Drawer.Title>

					<div>{children}</div>
				</div>

				{/* white background to prevent overlay showing underneath (when you swipe down then swipe up rubber band effect) */}
				<div className="absolute bottom-0 bg-white h-10 w-full -mb-10" />
			</Drawer.Content>
		</Drawer.Portal>
	</Drawer.Root>
)
