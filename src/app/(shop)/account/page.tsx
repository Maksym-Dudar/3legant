import MainLayouts from "@/shared/layout/HeaderFooterLayouts";
import PadingXLayouts from "@/shared/layout/PadingXLayouts";
import { SideMenu } from "@/widgets/user-panel/SideMenu";

export default function Account() {
	return (
		<MainLayouts>
			<PadingXLayouts>
				<div className='flex flex-row'>
					<SideMenu />
					<div className=''>vgbhjkl;</div>
				</div>
			</PadingXLayouts>
		</MainLayouts>
	);
}
