interface Strategy {
    calculatePrice(price: number): number;
}

class DiscountStrategy implements Strategy {
    calculatePrice(price: number): number {
        return price * 0.8;
    }
}

class RegularPrice implements Strategy {
    calculatePrice(price: number): number {
        return price;
    }
}

class PromotionalPrice implements Strategy {
    calculatePrice(price: number): number {
        return price * 0.6;
    }
}

type PriceType = "discount" | "promotional" | "regular";
class StrategyContext {
    private static readonly strategies: Record<string, Strategy> = {
        discount: new DiscountStrategy(),
        promotional: new PromotionalPrice(),
        regular: new RegularPrice(),
    };

    getPrice(price: number, strategy: PriceType): number {
        return StrategyContext.strategies[strategy].calculatePrice(price);
    }
}

const strategyContext = new StrategyContext();

console.log(strategyContext.getPrice(100, "regular"));
console.log(strategyContext.getPrice(100, "discount"));
console.log(strategyContext.getPrice(100, "promotional"));
