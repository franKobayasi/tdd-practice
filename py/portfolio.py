import functools 
import operator
# Step 04. Separating Our Code into Modules
from money import Money

# Step 02. Separating Our Code into Modules
class Portfolio:
    def __init__(self): 
        self.moneys = []
        
    def add(self, *moneys):
        self.moneys.extend(moneys)

    def evaluate(self, currency):
        total = functools.reduce(operator.add, map(lambda m: m.amount, self.moneys), 0)
        return Money(total, currency)