// Calculate Experience Period function
export function helpers(job_period: string): number {
    const [start, end] = job_period.split(" - ");
    const period_counter = end.toLowerCase() === "present"
        ? new Date().getFullYear() - parseInt(start)
        : parseInt(end) - parseInt(start);

    return period_counter;
}
