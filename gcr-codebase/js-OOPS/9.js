class FitnessAnalytics {
    constructor(workoutData) {
        if (!workoutData || workoutData.length === 0) {
            throw new Error("Workout dataset cannot be empty.");
        }

        this.workoutData = workoutData;
    }

    getActiveUsers() {
        return this.workoutData.filter(user => user.steps > 7000);
    }

    getAverageCalories() {
        const total = this.workoutData.reduce((sum, user) => {
            return sum + user.calories;
        }, 0);

        return total / this.workoutData.length;
    }

    getUserSummary() {
        return this.workoutData.map(user => {
            return user.user + " walked " + user.steps + " steps and burned " + user.calories + " calories.";
        });
    }
}

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    const analytics = new FitnessAnalytics(workoutData);

    console.log("Active Users:", analytics.getActiveUsers());
    console.log("Average Calories:", analytics.getAverageCalories());
    console.log("User Summary:", analytics.getUserSummary());
} catch (error) {
    console.log("Fitness Error:", error.message);
}
