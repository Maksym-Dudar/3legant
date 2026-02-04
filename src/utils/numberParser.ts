export const toNumber = (v: string | null, d: number) => {
	const n = Number(v);
	return Number.isFinite(n) ? n : d;
};

export const toNumberOrNull = (v: any) => v !== null && Number.isFinite(Number(v)) ? Number(v) : null;
