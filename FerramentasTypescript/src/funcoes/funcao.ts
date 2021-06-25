export function somar(...valores: number[]): number {
	return valores.reduce((total,valorAtual) => total += valorAtual) 
}