import { Container, Locale, ScrollArea, Text } from "@moto-ui/react";

const arabicText = [
	"مرحباً بكم في نظام التمرير المخصص",
	"هذا مثال على النص العربي في منطقة التمرير",
	"يدعم النظام اللغات التي تُكتب من اليمين إلى اليسار",
	"التمرير الأفقي يعمل بشكل صحيح مع النصوص العربية",
	"يمكنك رؤية كيف تتكيف أشرطة التمرير مع اتجاه النص",
	"النظام يدعم التمرير العمودي والأفقي في نفس الوقت",
	"يمكن تخصيص مظهر أشرطة التمرير حسب التصميم المطلوب",
	"التفاعل مع أشرطة التمرير سهل ومريح للمستخدم",
	"يعمل النظام بسلاسة على جميع المتصفحات الحديثة",
	"يمكن دمج هذا المكون مع مكونات أخرى بسهولة",
	"الأداء محسّن للتعامل مع كميات كبيرة من المحتوى",
];

export default function Rtl() {
	return (
		<Container maxW="20rem">
			<Locale locale="ar-AE">
				<ScrollArea h="8rem">
					<ScrollArea.Viewport>
						<ScrollArea.Content pl="12">
							{arabicText.map((text, idx) => (
								<Text
									key={idx.toString()}
									fontSize="14"
								>
									{text}
								</Text>
							))}
						</ScrollArea.Content>
					</ScrollArea.Viewport>
					<ScrollArea.Scrollbar>
						<ScrollArea.Thumb />
					</ScrollArea.Scrollbar>
				</ScrollArea>
			</Locale>
		</Container>
	);
}
