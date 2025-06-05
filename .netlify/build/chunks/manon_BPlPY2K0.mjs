const manon = new Proxy({"src":"/_astro/manon.IBDWFh6r.webp","width":320,"height":322,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/admin/Documents/GitHub/projet-co-s2-2025-08_faclink/src/assets/manon.webp";
							}
							
							return target[name];
						}
					});

export { manon as m };
